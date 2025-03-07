import resumeJSON from "./resume.json";

const Heading = props => {
  if (props.order === 1) return (<h1 className="font-bold text-4xl text-center">{props.content}</h1>)
  if (props.order === 2) return (<h2 className="font-bold text-2xl mt-4 border-b">{props.content}</h2>)
  if (props.order === 3) return (<h3 className="font-bold">{props.content}</h3>)
}

const ResumeSectionItem = ({item}) => {
  let date = (item.start_date && item.end_date) ? `${item.start_date} — ${item.end_date}`
    : (item.start_date && !item.end_date) ? `${item.start_date} — Present`
    : item.completed_date;
  
  let taskList = [];
  if (item.tasks) {
    item.tasks.forEach((task) => {
      taskList.push(<li className="list-disc" key={task}>{task}</li>)
    })
  }

  return (
    <div className="resume-section-item">
      <div className="resume-section-item-header flex-sm gap-2 mt-2">
        <Heading order={3} content={item.name} />
        <p className="grow before:content-['|'] before:pe-2">{item.location}</p>
        <p>{date}</p>
      </div>
      <p>{item.summary}</p>
      {(taskList.length > 0) ? (<ul className="ps-10">{taskList}</ul>) : ""}
    </div>
  )
}

const ResumeSection = props => {
  let sectionObject = props.section;
  let sectionName = props.sectionName;
  let sectionTitle = props.sectionName.replace(/^./, char => char.toUpperCase());
  let isContact = (sectionName === "contact");
  let isSkills = (sectionName === "skills");
  let resumeSectionContent = [];

  if (isContact) {
    sectionObject.contacts.forEach((contact) => {
      let href = (contact.rel) ? `${contact.rel}${contact.content}` : contact.content;
      resumeSectionContent.push(
        <a className="[&:not(:first-child)]:before:content-['|'] [&:not(:first-child)]:before:pe-2 [&:not(:first-child)]:before:ps-2" href={href} title={contact.name} key={contact.name}>
          {contact.content}
        </a>
      )
    })
  
  } else if (isSkills) {
    sectionObject.content.forEach((skill) => {
      resumeSectionContent.push(
        <div className="flex-sm gap-2" key={skill.title}>
          <dt className="flex-none font-bold xs:mt-2 sm:mt-0 after:content-[':']" key={`${skill.title}-title`}>{skill.title}</dt>
          <dd className="grow" key={`${skill.description}-description`}>{skill.description}</dd>
        </div>
      )
    })

  } else {
    sectionObject.content.forEach((item) => {
      resumeSectionContent.push(
        <ResumeSectionItem
          item={item}
          key={item.name} />
      )
    })
  }

  return (
    <div className={`resume-section resume-${sectionName} ${(isContact) ? "text-center" : ""}`}>
      {(!isContact) ? (<Heading order={2} content={sectionTitle} />) : ""}
      {(isSkills) ? (<dl className="sm:mt-2">{resumeSectionContent}</dl>) : resumeSectionContent}
    </div>
  )
}

const Resume = ({resumeJSON}) => {
  let resumeSections = [];

  resumeJSON.forEach((section) => {
    resumeSections.push(
      <ResumeSection
        section={section}
        sectionName={section.section_name.toLowerCase()}
        key={section.section_id} />
    )
  })

  return (
    <div className="resume font-serif max-w-4xl">
      <Heading order={1} content="Kim N Livingston" />
      {resumeSections}
    </div>
  )
}

export default function Home() {
  return (
    <Resume 
      resumeJSON={resumeJSON} />
  );
}