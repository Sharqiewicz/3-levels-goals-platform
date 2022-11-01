const Level = ({name, isCompleted}) => (
  <div className={ `w-60 h-60 p-6 m-auto md:mx-2 my-5 rounded-full flex justify-center items-center text-center ${ isCompleted ? "bg-green-500" : "bg-red-500" }` }>
    <p className="text-sm">{name}</p>
  </div> 
)

export default function Goal({
  title,
  description,
  firstLevel,
  firstLevelCompleted,
  secondLevel,
  secondLevelCompleted,
  thirdLevel,
  thirdLevelCompleted
}) {

  const first = { name: firstLevel, isCompleted: firstLevelCompleted };
  const second = { name: secondLevel, isCompleted: secondLevelCompleted };
  const third = { name: thirdLevel, isCompleted: thirdLevelCompleted };

  return (
    <section >
      <div className="mb-8 md:mb-16">
      </div>
        <div className="w-full">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <a className="hover:underline">{title}</a> 
          </h3>
          <p>{ description }</p> 
          
          <div className="mb-4 md:mb-0 text-lg md:flex">
            <Level {...first}/>
            <Level {...second}/>
            <Level {...third}/>
          </div>
        </div>
    </section>
  )
}
