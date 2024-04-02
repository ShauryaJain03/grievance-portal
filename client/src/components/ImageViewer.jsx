import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function ImageViewer() {
  return (
    <div>
    <PhotoProvider>
      <PhotoView src="https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
        <img src="https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={100} height={100} />
      </PhotoView>
    </PhotoProvider>
    </div>
  )
}

export default ImageViewer
