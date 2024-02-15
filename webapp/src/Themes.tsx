type Props = {
    theme: 'light' | 'dark',
    children: any
}

const Themes = (props: Props) => {
    const themeChooser = () => {
        switch (props.theme) {
            case 'dark':
                return require('./styles/bootstrap-cyborg.css');
            case 'light':
                return require('./styles/bootstrap-flatly.css');
        }
    }

    return (
        <div className={themeChooser()}>{props.children}</div>
    )
}

export default Themes;