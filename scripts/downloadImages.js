import axios from 'axios';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { delhiPlacesData } from '../src/data/delhiPlaces.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get API key from environment variables
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

if (!UNSPLASH_ACCESS_KEY) {
  console.error('❌ Error: UNSPLASH_ACCESS_KEY is not set in environment variables');
  process.exit(1);
}

const IMAGE_DIR = path.join(__dirname, '../public/images/places');

async function downloadImage(place) {
  try {
    // Create a more specific search query
    const searchQuery = `${place.name} delhi landmark architecture`;
    
    // Search for images on Unsplash
    const searchResponse = await axios.get(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: searchQuery,
          per_page: 1,
          orientation: 'landscape',
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!searchResponse.data.results.length) {
      console.log(`No image found for ${place.name}`);
      return null;
    }

    const imageUrl = searchResponse.data.results[0].urls.regular;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Process image with sharp
    const processedImage = await sharp(imageResponse.data)
      .resize(1200, 800, { fit: 'cover' }) // Increased size for better quality
      .jpeg({ quality: 85 }) // Slightly higher quality
      .toBuffer();

    // Save the processed image
    const fileName = `${place.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    const filePath = path.join(IMAGE_DIR, fileName);
    await fs.writeFile(filePath, processedImage);

    console.log(`✅ Downloaded and processed image for ${place.name}`);
    return fileName;
  } catch (error) {
    console.error(`❌ Error processing ${place.name}:`, error.message);
    return null;
  }
}

async function main() {
  try {
    // Create images directory if it doesn't exist
    await fs.mkdir(IMAGE_DIR, { recursive: true });

    console.log('🚀 Starting image download process...');
    
    // Download images for each place
    const updatedPlaces = await Promise.all(
      delhiPlacesData.map(async (place) => {
        const imageFileName = await downloadImage(place);
        return {
          ...place,
          image: imageFileName ? `/images/places/${imageFileName}` : null,
        };
      })
    );

    // Save updated places data
    const updatedData = `export const delhiPlacesData = ${JSON.stringify(updatedPlaces, null, 2)};`;
    await fs.writeFile(
      path.join(__dirname, '../src/data/delhiPlaces.js'),
      updatedData
    );

    console.log('✨ All images downloaded and processed successfully!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main(); 