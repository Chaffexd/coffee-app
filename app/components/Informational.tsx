type InformationProps = {
  informationalData: {
    title: string;
    description: string;
    cardsCollection: {
      items: {
        title: string;
        description: string;
        image: {
          altText: string;
          image: {
            url: string;
          }
        }
      }[]
    }
  }
}

const Informational = ({ informationalData }: InformationProps) => {
  console.log("INFO = ", informationalData)
  return (
    <div>Informational</div>
  )
}

export default Informational