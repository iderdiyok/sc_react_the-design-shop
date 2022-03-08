
const Navigation = () => {
    return (
        <header>
            <p>THE DESIGN SHOP</p>
            <nav>
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <ul className="menu">
                    <li>Featured</li>
                    <li>Lifestyle</li>
                    <li>Books</li>
                    <li>Digital</li>
                    <li>|</li>
                    <li>Weekly Picks</li>
                    <li>The Design Blog</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation