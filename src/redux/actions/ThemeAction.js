const setMode = mode => {
    return {
        type: 'SET_MODE',
        payload: mode
    }
}

const exportDefault = {
    setMode,
}

export default exportDefault