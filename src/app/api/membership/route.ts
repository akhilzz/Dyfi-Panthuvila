import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Store in a local JSON file
    const filePath = path.join(process.cwd(), 'memberships.json');
    
    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch (e) {
      // File doesn't exist or is invalid, start with empty array
    }
    
    const entry = {
      ...data,
      timestamp: new Date().toISOString()
    };
    
    existingData.push(entry);
    
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
    
    return NextResponse.json({ success: true, message: 'Membership stored successfully' });
  } catch (error) {
    console.error('Error saving membership:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
