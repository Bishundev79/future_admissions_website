/*
  # Create contact inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - unique identifier for each inquiry
      - `first_name` (text) - visitor's first name
      - `email` (text) - visitor's email address
      - `message` (text) - inquiry message from the visitor
      - `created_at` (timestamptz) - timestamp when inquiry was submitted
      - `status` (text) - inquiry status (default: 'new')

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting inquiries (public can submit)
    - Add policy for authenticated admins to view inquiries

  3. Notes
    - Default values set for status and timestamp
    - Table designed to capture admission inquiry data
    - Public can submit inquiries but cannot read others' submissions
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
