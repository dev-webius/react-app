function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            {props.warn}
        </div>
    )
}

export default WarningBanner;