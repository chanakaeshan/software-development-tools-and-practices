import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function AddProperty() {
  return (
    <div>
      
        <title>Add Property</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      
      
      <div className="add-property">
        
        <div className="add-property-form">
          <h1>Add Your Property</h1>
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <br />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <br />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required />
            <br />
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required />
            <br />
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" required />
            <br />
            <button type="submit">Add Property</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}