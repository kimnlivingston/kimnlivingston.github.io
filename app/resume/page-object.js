import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import styles from "./page.css";
import resumeJSON from "./resume.json";

const ContactList = ({contact}) => {
  let href = (contact.rel) ? contact.rel+contact.content : contact.content;
  return (
    <a href={href} title={contact.name}>
      {contact.content}
    </a>
  );
}

const ResumeExperienceSection = ({item}) => {
  let dateRange = (item.end_date) ? `${item.start_date} — ${item.end_date}` : `${item.start_date} — Present`; 
  let experienceResponsibilities = [];

  item.responsibilities.forEach((task) => {
    experienceResponsibilities.push(
      <li key={task}>{task}</li>
    )
  })

  return (
    <div className="resume-section-item">
      <div className="resume-section-item-header">
        <h3 className="title">{item.name}</h3>
        <p className="location">{item.organization}, {item.location}</p>
        <p className="date">{dateRange}</p>
      </div>
      <p>{item.summary}</p>
      <ul>{experienceResponsibilities}</ul>
    </div>
  )
}

const ResumeEducationSection = ({item}) => {
  return (
    <div className="resume-section-item">
      <div className="resume-section-item-header">
        <h3 className="title">{item.name}</h3>
        <p className="location">{item.location}</p>
        <p className="date">{item.completed_date}</p>
      </div>
      <p>{item.summary}</p>
    </div>
  )
}

const SkillList = ({skill}) => {
  return (
  <div className="skills-list">
    <dt>{skill.name}:</dt>
    <dd>{skill.content}</dd>
  </div>
  );
}

const Resume = ({resumeJSON}) => {

  let contactItems = [];
  let ExperienceItems = [];
  let EducationItems = [];
  let SkillItems = [];
  
  resumeJSON.contacts.forEach((contact) => {
    contactItems.push(
      <ContactList
        contact={contact}
        key={contact.name} />
    )
  })

  resumeJSON.experience.forEach((item) => {
    ExperienceItems.push(
      <ResumeExperienceSection
        item={item}
        key={item.name} />
    )
  })

  resumeJSON.education.forEach((item) => {
    EducationItems.push(
      <ResumeEducationSection
        item={item}
        key={item.name} />
    )
  })
  
  resumeJSON.skills.forEach((skill) => {
    SkillItems.push(
      <SkillList
        skill={skill}
        key={skill.name} />
    )
  })
  
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>{resumeJSON.name}</h1>
        <div id="contact-information" className="resume-section">
          {contactItems}
        </div>
      </div>
      <div id="experience" className="resume-section">
        <h2>Experience</h2>
        <dl>{ExperienceItems}</dl>
      </div>
      <div id="education" className="resume-section">
        <h2>Education</h2>
        <dl>{EducationItems}</dl>
      </div>
      <div id="skills" className="resume-section">
        <h2>Skills</h2>
        <dl>{SkillItems}</dl>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Resume resumeJSON={resumeJSON}/>
  );
}