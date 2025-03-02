interface InfoBlockProps {
    title: string;
    text: string;
  }

export default function InfoBlock({title, text}: InfoBlockProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}