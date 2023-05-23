import { Link } from 'react-router-dom';
import figureGif from './Joshua.gif'

function Home() {

  return (
    <div className="justify-content-center text-center mt-3">
      <h1 className="text-primary fw-bold">투두 리스트를 작성해봅시당😊</h1>
      <hr />
      <figure>
        <blockquote className="blockquote">
          <p className="h6 fw-bold">
            제대로 배우기 위해서는 거창하고 교양 있는 전통이나 돈이 필요하지 않다. 스스로를 개선하고자 하는 열망이 있는 사람들이 필요할 뿐이다.
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Source Title" className="h6 fw-bold">
            Adam Cooper
          </cite>
        </figcaption>
      </figure>
      <img src={figureGif} width="50%" alt="조슈아" />
      <h5 className="fw-bold">우리 함께 잘 해보아요 😍</h5>
      <hr />
      <div className='d-flex justify-content-center'>
        <p className="h5 fw-bold mt-2" >✔일정 작성</p>
        <Link to="/todo" className="btn btn-success ms-2 fw-bold">GO !</Link>
      </div>
    </div>
  )
}

export default Home;