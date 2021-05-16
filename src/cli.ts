import { Kdecole } from './Kdecole'

/**
 * Pour obtenir un jeton d'authentification, vous pouvez utiliser la ligne de commande
 * @example ```bash
 * npx kdecole <identifiant> <code_activation_mobile>
 * ```
 */
export async function cli (args: string[]): Promise<void> {
  if (args.length < 4) {
    console.log("Pas assez d'arguments.")
    console.log('La syntaxe est: kdecole IDENTIFIANT CODE')
    return
  }

  switch (args.length) {
    case 4:
      console.log(await Kdecole.login(args[2], args[3]))
      console.log('ATTENTION: Ce token doit rester secret.')
  }
}
