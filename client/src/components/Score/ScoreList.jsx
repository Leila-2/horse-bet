import { useEffect } from 'react';
import { socket } from '../../services/socketConnect';
import { useSelector, useDispatch } from 'react-redux';
import { getScore } from '../../store/horsesSlice';
import ScoreItem from './ScoreItem';
export default function ScoreList() {
  const horses = useSelector((state) => state.horses.horses);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.connected);
    });
    socket.emit('start');
    socket.on('ticker', (data) => {
      dispatch(getScore(data));
    });
  }, [horses, dispatch]);

  return (
    <div>
      <ScoreItem horses={horses} />
    </div>
  );
}
