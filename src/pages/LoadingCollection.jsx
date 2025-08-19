

export default function LoadingCollection() {
    return (
        <>
            <div className="skeleton" style={{width: "200px", height: "30px", marginLeft: "4rem"}}></div>
            <div className="collection-container">
                <div className="skeleton collection-skeleton" style={{width: "250px", height: "250px"}}></div>
                <div className="skeleton collection-skeleton" style={{width: "250px", height: "250px"}}></div>
                <div className="skeleton collection-skeleton" style={{width: "250px", height: "250px"}}></div>
                <div className="skeleton collection-skeleton" style={{width: "250px", height: "250px"}}></div>
                <div className="skeleton collection-skeleton" style={{width: "250px", height: "250px"}}></div>
            </div>
        </>
    );
}