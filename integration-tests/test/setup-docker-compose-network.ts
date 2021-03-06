import { DockerComposeNetwork } from './shared/docker-compose'

before(async () => {
  if (!process.env.NO_NETWORK) {
    await new DockerComposeNetwork().up()
  }
})
