let navbar = () => {
    return `<div id="search_bar">
    <input type="text" id="query">
</div>
<div id="category">
    <h3 id="nature">Nature</h3>
    <h3 id="car">Cars</h3>
    <h3 id="music">Music</h3>
    <h3 id="cartoon">Cartoons</h3>
    <h3 id="technology">Technology</h3>
    <h3 id="marvel">Marvel</h3>
    <h3><select name="" id="sort">
    <option value="latest">Latest</option>
    <option value="popular">Popular</option>
    <option value="oldest">Oldest</option>
    </select></h3>
    <h3>
    <select name="" id="filter">
    <option value="landscape">Landscape</option>
    <option value="portrait">Portrait</option>
    <option value="squarish">Squarish</option>
    </select></h3>
</div>`;
};

export { navbar };