import Kdecole from './Kdecole'

export async function cli (args: string[]): Promise<void> {
  if (args.length < 4) {
    console.log("Pas assez d'arguments.")
    return
  }

  switch (args.length) {
    case 4:
      console.log(await Kdecole.login(args[2], args[3]))
      console.log('ATTENTION: Ce token est une information qui ne doit pas être divulguée.')
  }
}
