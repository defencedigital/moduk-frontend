import { type ReactElement } from 'react'

export type PermissiveChild<Props = unknown> = ReactElement<Props> | boolean | null | Iterable<PermissiveChild<Props>>
