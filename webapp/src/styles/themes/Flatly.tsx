import './bootstrap-flatly.css';

type Props = {
    children: any
}

const Flatly = (props: Props) => {
  return (
    <div>{props.children}</div>
  )
}

export default Flatly