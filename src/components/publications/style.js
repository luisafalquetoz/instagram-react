import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap:  20px;
`;

export const ContainerPublications = styled.div `
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 12px;
    height: 320px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.textPrimary};
        border-radius: 20px;
    }
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 240px;
`;

export const PublicationImage = styled.img `
    width: 100%;
    height: 220px;
    border-radius: 20px;
`;