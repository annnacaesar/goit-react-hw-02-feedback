import styled from "styled-components";

export const Container  = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const TitleStatistic = styled.h2`
font-size: 28px;
margin-bottom: 20px;
color: rgb(37, 37, 37);
`

export const List = styled.ul`
font-size: 22px;
`

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 20px;
}
`
