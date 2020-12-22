export interface IAntDetails {
    name: string;
    latitude: number;
}

export const AntDetailsCard = (props: IAntDetails) => (
    <div>
        {props.name}
    </div>
);

export default AntDetailsCard;