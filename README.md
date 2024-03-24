# Pinnacle.CV Database Capture and Ranking System

## Overview

This project aims to create a database capturing program for Pinnacle, a recruitment platform, where CVs of candidates are crawled and structured data sets are created. The program also allows recruiters to publish job descriptions (JDs) with keywords, which are then used to rank suitable candidates based on keyword matching.

## Tech Stack

### Frontend
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Redux
- **API Requests:** Fetch API

### Backend
- **Framework:** Node.js with Express
- **Database:** MongoDB with Mongoose for schema management
- **Web Scraping:** Cheerio for crawling CVs and parsing keywords

## Storage/Cloud/Server

- **Database:** MongoDB Atlas for cloud-based storage, providing scalability and accessibility to the backend owner/administrator.

## Methodology

1. **Data Crawling and Structuring:**
   - Utilize web scraping techniques with Cheerio to crawl CVs from specified sources.
   - Structure the crawled data into organized datasets for storage and analysis.

2. **Job Description Publishing:**
   - Implement a feature for recruiters to publish job descriptions with keywords relevant to the role.

3. **Keyword Matching and Candidate Ranking:**
   - Compare keywords from JDs with candidate CVs to determine keyword matches.
   - Implement a ranking algorithm based on the number of keyword matches to force-rank suitable candidates.

4. **Backend API and Admin Dashboard:**
   - Develop RESTful APIs using Express to handle CRUD operations for CVs, JDs, and candidate ranking.
   - Create an admin dashboard for recruiters to manage CVs, publish JDs, and view ranked candidates.

5. **User Authentication and Authorization:**
   - Implement user authentication using JWT (JSON Web Tokens) for secure access to the system.
   - Define roles and permissions for administrators and recruiters.

6. **Frontend Development:**
   - Build a responsive and user-friendly frontend using React.js and Tailwind CSS.
   - Integrate Redux for state management to ensure efficient data handling and UI updates.

7. **Testing and Deployment:**
   - Conduct thorough testing, including unit tests for backend APIs and UI tests for frontend components.
   - Deploy the application on hosting platforms like Heroku for demonstration and production use.

#Getting Started
1. Clone the Repository
2. npm install in each folder
3. nodemon index.js for Backend.Pinnacle
4. npm run dev for Recruiter Interface
5. npm run start for User Interface 
