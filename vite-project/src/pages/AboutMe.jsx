import Image from "../assets/profile.jpg"

const styles = {
    imgMax: {
        maxWidth: "500px",
        width: "100%",
    }
}

export default function AboutMe() {
    return (
        <>
            <div>
                <h2 className="h2 text-center">About Me</h2>
            </div>
            <div className="container">
                <img src={Image} className="rounded mx-auto d-block img-fluid" alt="profile picture with my cat" style={styles.imgMax}></img>
            </div>
            <div className="container">
                <p className="lead text-center">
                    Software engineer, bootcamp student, and creative thinker.
                </p>
                <p className="text-center">
                    I'm a creative and analytical software engineer with experience in full-stack development, automation, and data analysis. I have a strong background in C#/.NET, SQL, and hardware interfacing, with hands-on experience in troubleshooting and process improvement. In 2020, I graduated from the University of Minnesota with a B.Sc. in Computer Science.
                </p>
                <p className="text-center">
                    I fell in love with computing through robotics in high school and college. Now, after a few years of writing software professionally, I'm starting a software QA role with Banner Engineering. I'm also starting to learn web development by taking a coding bootcamp!
                </p>
            </div>
        </>
    );
}