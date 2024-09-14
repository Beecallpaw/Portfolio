import ThemeSwitcher from "./ThemeSwitcher";

export const Header = () => {
    return (
        <header className="flex justify-between p-2">
            <div className="flex-shrink-0">
                <nav>Home</nav>
            </div>
            <div className="flex-shrink-0">
                <nav>
                    <ThemeSwitcher />
                </nav>
            </div>
        </header>
    )
}