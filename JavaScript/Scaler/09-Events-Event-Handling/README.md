### **Class Overview**

This session focused on creating a mini CRUD application simulating **BookMyShow** functionalities using **JavaScript**, **HTML**, and **CSS**. The goal was to dynamically handle **movie listings**, **genre-based filtering**, **adding**, and **deleting** movies through DOM manipulation.

---

### **Key Concepts and Implementations**

#### **1. CSS Positioning (Relative and Absolute)**

- **position: relative** sets a new coordinate system for child elements.
- **position: absolute** positions an element based on its nearest positioned ancestor.
- Used to align elements like a **delete button** at the top-right corner of movie cards for a clean UI.

---

#### **2. Event Handling in JavaScript**

- **Click Events:** Used to add interactivity to buttons such as “Delete.”
- **Dynamic Event Binding:** Applied through `querySelectorAll` and looping with `forEach` to attach listeners.
- **Delete Functionality:** Achieved using the `.remove()` method on targeted DOM elements.

---

#### **3. DOM Manipulation**

- **Genre Filtering:** Movies were shown or hidden based on selected genres by toggling the `display` property.
- **Data Attributes:** Used `data-*` attributes to store genre information and simplify filtering logic.
- **Dynamic Styling:** Managed visibility by adding or removing a common CSS class (e.g., `.hide`) for efficiency and cleaner code.

---

#### **4. Scroll Navigation**

- Implemented **keyboard-based navigation** for scrolling between page sections.
- Keys like **1**, **2**, **3**, **t**, and **b** navigated to specific sections, top, or bottom of the page.
- Used **scrollIntoView()** and calculated scroll positions for smooth navigation.

---

#### **5. Optimizing Element Removal**

- Used `.closest()` to locate parent containers (e.g., movie cards) to ensure reliable deletion even with nested HTML structures.

---

### **Additional Learning Points**

#### **JavaScript Rendering and Event Binding**

- Proper placement of `<script>` tags is crucial — scripts should execute **after** DOM elements load to avoid null references.
- Best practice: Place JavaScript code before the closing `</body>` tag or use the `defer` attribute.

#### **Coding Philosophy and Debugging**

- Debug iteratively: test and isolate functionalities to detect logic or styling errors early.
- Reset styles or visibility after filtering to ensure consistent user experience.

---

### **Conclusion**

This session emphasized practical **DOM manipulation**, **event-driven programming**, and **UI interactivity**. By applying CRUD operations dynamically, developers learn to build responsive interfaces—skills fundamental for creating interactive and user-friendly web applications.
