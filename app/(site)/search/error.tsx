'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <>
            <h3>Что-то пошло не так на странице Search</h3>
            <div> {JSON.stringify(error)} </div>
            <button onClick={reset}>ПЕРЕЗАГРУЗИТЬ</button>
        </>
    );
}
