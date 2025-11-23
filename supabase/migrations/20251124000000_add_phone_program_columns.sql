/*
  # Add phone and program columns to contact_inquiries table

  1. Changes
    - Add `phone` (text) column for contact phone number
    - Add `program` (text) column for program interest (MBA/BBA/Both/Other)

  2. Notes
    - Both columns are required (NOT NULL)
    - Existing records need to be handled if any exist
*/

-- Add phone column
ALTER TABLE contact_inquiries 
ADD COLUMN IF NOT EXISTS phone text;

-- Add program column
ALTER TABLE contact_inquiries 
ADD COLUMN IF NOT EXISTS program text;

-- Make columns required for new entries (but allow NULL for existing data)
ALTER TABLE contact_inquiries 
ALTER COLUMN phone SET NOT NULL;

ALTER TABLE contact_inquiries 
ALTER COLUMN program SET NOT NULL;
