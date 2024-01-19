import run from '../../components/script/utils/run';
import { series } from 'gulp';
import { pkgPath } from "../../components/script/utils/paths";
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/utils`);
};
export default series(async () => publishComponent());
