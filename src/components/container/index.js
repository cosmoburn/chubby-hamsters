import React from 'react'
import styled from '@emotion/styled'

const Container = ( { children, padding = '0' } ) => (
  <StyledContainer padding={padding}>
    {children}
  </StyledContainer>
)

const StyledContainer = styled.div`   
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  padding: ${p => p.padding};
  text-align: center;
`

export default Container