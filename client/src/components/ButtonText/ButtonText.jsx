import { Container } from './styles-buttontext';

export function ButtonText({ icon: Icon, title, ...rest }) {
  return(
    <Container 
      type="button"
      
      {...rest}
    >
      { Icon && <Icon size={24} /> }
      {title}
    </Container>
  )
}