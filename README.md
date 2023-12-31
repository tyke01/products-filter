# products-filter

**Project Description:**

![Project Screenshot](![Project Screenshot](https://user-images.githubusercontent.com/97126661/278868447-680921ae-ae69-4be3-94e7-60ea71767e94.PNG)
)


This project is a dynamic product catalog that provides an interactive and user-friendly way to browse a range of products. Users can search for specific products, filter products by category, and set price range preferences. The project's main features include:

1. **Product Display:** The project showcases a collection of products, each with a name, image, and price. The product data is stored in an array called `data`.

2. **Search Functionality:** Users can enter keywords in the search input field to find products that match their search criteria. The product list updates in real-time as users type.

3. **Category Filtering:** Products are organized into different categories, such as "Dress," "Sport," "Luxury," and more. Users can filter products by selecting a category, with an "All" option to display all products.

4. **Price Range Filtering:** Users can adjust a price range slider to set a maximum price for displayed products. The displayed products update dynamically based on the selected price range.

**Key Implementation Details:**

- The `displayProducts` function takes an array of filtered products and updates the product container by generating product cards. The product cards display product names, images, and prices.

- The search input field features an event listener to track user input. As users type, the project filters and displays products whose names contain the entered keywords.

- Categories are dynamically generated from the product data, and clicking on a category button filters the products accordingly.

- The price range slider allows users to select their desired maximum price, and products priced within or below that range are displayed in real-time.

**Technologies Used:**

- HTML, CSS: The project uses HTML for the structure and CSS for styling.

- JavaScript: JavaScript handles user interactions and dynamically updates product displays based on search queries, category selections, and price range adjustments.

**Note:**
The project is fully functional and ready for use. It provides a versatile and engaging way for users to explore and find products according to their preferences. Image URLs should be valid to display images correctly.
