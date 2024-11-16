import network from '../utils/network';

export default function test(opts){
  return network.get('/test', {
    params: opts
  })
}