import {useRouter} from 'next/router'
import Link from "next/link"

//Lo dejo afuera para que solo se procese una vez.
const style = {
    color: '#f00',
}

export const ActiveLink = ({text, href}) => {

    const { asPath } = useRouter();
    // console.log(router)

    return (
        <Link href={href}>
            <a style={asPath === href ? style: null}>{ text }</a>
        </Link>
    )
}

