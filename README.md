# Arijit Char Portfolio

[Live Demo](https://arijitchar.netlify.app/)

## Description

Welcome to my portfolio website! This platform serves as a showcase of my work, skills, and experiences as a developer. I've designed and built this website using React, leveraging various libraries and components to enhance its functionality and aesthetics.

## Features

- **React and Framer Motion**: The website is built using React, a popular JavaScript library for building user interfaces. Framer Motion is used for smooth animations, adding a touch of elegance to the user experience.

- **Responsive Design**: Ensuring accessibility across different devices is crucial. Therefore, I've implemented a responsive design approach to guarantee optimal viewing experiences on desktops, tablets, and mobile devices.

- **Floating Buttons**: The FloatingButtons component provides easy access to my social media profiles. While integrating this component, I encountered challenges in making it responsive and applying SCSS directly. As a workaround, I utilized inline styles for positioning based on the window width.

- **Email Management**: Managing communication is essential, which is why I've integrated EmailJS for seamless email handling directly through the website. This ensures efficient communication and simplifies the process for visitors to reach out to me.

- **Overlay Navbar**: Navigation is made simple with an overlay navbar, allowing users to easily explore different sections of the website without interrupting their browsing experience.

- **SCSS Styling**: To maintain a clean and organized codebase, I've utilized SCSS for styling components. SCSS offers powerful features such as variables, nesting, and mixins, enhancing code readability and maintainability.

- **Animated Cursor**: Adding subtle animations to elements can significantly enhance user interaction. I've incorporated an animated cursor to provide visual feedback and create a more engaging experience for visitors.

## Problem Faced

While implementing the FloatingButtons component, I faced challenges in making it responsive and applying SCSS directly. The component's limitations required me to use inline styles for positioning based on the window width. However, I managed to overcome this challenge by dynamically adjusting the button position using JavaScript based on the viewport width. Here's the code snippet that solved the problem:

```javascript
let top = window.innerWidth <= 845 ? -4 : 3.25;
let left = window.innerWidth <= 845 ? 20 : 12;

<FloatingButtons
    // Other props...
    top={`${top}vh`}
    left={`${left}vw`}
/>
```
## Live Video Demonstration

To provide a visual walkthrough of my portfolio website, I've created a demonstration video. You can watch the video by clicking on the image below:

[![Portfolio Demo Video](https://img.youtube.com/vi/38bwiccps9g/0.jpg)](https://www.youtube.com/watch?v=38bwiccps9g)

## Backend Development

In addition to the frontend development, I am currently working on the backend of this website. Here's an overview of the backend development:

- **Technologies Used**: Node.js, Express.js, MongoDB
- **Functionality**: Creating an admin panel to manage projects, education details, and work experiences. Utilizing Redux for frontend state management and Cloudinary for efficient management of images and files.
- **Purpose**: The admin panel enables administrators to seamlessly add, update, and delete content on the portfolio website, enhancing its functionality and ease of maintenance.

## Usage

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Arijit-Char/portfolio.git
```
2. Install dependencies:

```bash
cd portfolio
npm install
```
3. Start the development server:

```bash
npm start
```
1. Clone the repository:

```bash
git clone https://github.com/Arijit-Char/portfolio.git
```
## Contributing

Contributions are welcome! If you have any suggestions for improvements or spot any bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

