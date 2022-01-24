const localStorageKey = (key:string) => `physics-rev-${key}`;
// clean this up
export function setSiteThemePreference(newTheme: "dark" | "light") {
    localStorage.setItem(
        localStorageKey('theme'),
        newTheme
    );
}

export function getSiteThemePreference(): 'dark' | 'light' {
    // @ts-ignore
    return localStorage.getItem(localStorageKey('theme'))
}

export function getSiteTheme() {
    const app:Element = document.getElementsByTagName("body")[0];
    return app.classList.contains("light") ? "light" : "dark";
}

export function setSiteTheme(theme: "dark" | "light") {
    const app:Element = document.getElementsByTagName("body")[0];
    const oldTheme = theme == "dark" ? "light" : "dark";
    app.classList.remove(oldTheme);
    app.classList.add(theme);
}

export function toggleSiteTheme() {
    const app:Element = document.getElementsByTagName("body")[0];
    const [currentTheme, newTheme]: ["light" | "dark", "light" | "dark"] = app.classList.contains("light") ? ["light", "dark"] : ["dark", "light"];
    setSiteThemePreference(newTheme);
    app.classList.remove(currentTheme);
    app.classList.add(newTheme);
}