import Project from '../components/Project'
import paletteImage from "../assets/PalettePicker.png"
import forcastImage from "../assets/ForecastApp.png"
import placeholderImage from "../assets/Placeholder.png"

export default function Portfolio() {
    return (
        <>
            <div>
                <h2 className="h2 text-center">Portfolio</h2>
            </div>
            <div className="container">
                    <Project 
                        image={paletteImage} 
                        title="Palette Picker"
                        repoLink="https://github.com/Zubrungus/color-palette-app"
                        deployLink="https://zubrungus.github.io/color-palette-app/main/index.html"
                    />
                    <Project
                        image={forcastImage} 
                        title="Forecast App"
                        repoLink="https://github.com/kayla-e774/forecast-app?tab=readme-ov-file"
                        deployLink="https://forecast-app-zpli.onrender.com/"
                    />
                    <Project
                        image={placeholderImage} 
                        title="Placeholder 1"
                        repoLink="#"
                        deployLink="#"
                    />
                    <Project
                        image={placeholderImage} 
                        title="Placeholder 2"
                        repoLink="#"
                        deployLink="#"
                    />
                    <Project
                        image={placeholderImage} 
                        title="Placeholder 3"
                        repoLink="#"
                        deployLink="#"
                    />
                    <Project
                        image={placeholderImage} 
                        title="Placeholder 4"
                        repoLink="#"
                        deployLink="#"
                    />
            </div>
        </>
    );
}