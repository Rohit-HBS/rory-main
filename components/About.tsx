import Image from 'next/image';
import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'
import  localFont  from "next/font/local";


const myFont = localFont({
  src: '../public/fonts/BrandonGrotesque-Light.ttf',
  display: 'swap',
})

const About = (): JSX.Element => {
	return (
		<main className={myFont.className}>
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-12 hidden md:block md:mt-10 md:pt-20  rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl pt-10 mb-10 mt-10 md:mt-10 md:pt-10">{personalInfo.name}</h1>
					<p>
						Rohit Bhisikar is a Pre-Doc candidate and a research associate at Harvard Business School. He did his undergraduate from Ashoka University.
						 <br/>
						 <br/>
						As a curator and academic, Rohit is interested in philosophy, minority expression, and documentary practice. He current research focuses on independent publishing in late twentieth century India.
						 <br/>
						 <br/>
						He lives and works in Mumbai.
						<br/><a className = "text-sm">✉️ {personalInfo.about.email}</a>
					</p>
				</div>
			</div>
		</section>
		</main>
	);
};

export default About;
