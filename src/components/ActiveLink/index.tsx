import React, { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''
  // se a rota/pagina que estamos acessando for igual ao link que ele clicou então ativamos o className

  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}
