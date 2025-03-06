'use client';

const error = ({ error }: { error: Error }) => {
    return (
        <div>{`error -> ${error}`}</div>
    )
}
export default error