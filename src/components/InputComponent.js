import styled from 'styled-components';
import { scale } from 'react-native-size-matters';


export const InputComponent = styled.TextInput`
  font-size: ${scale(15)};
  width: 100%;
  height: 100%;
  padding-horizontal: ${scale(20)};
`;