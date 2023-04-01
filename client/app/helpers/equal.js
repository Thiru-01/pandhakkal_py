import { helper } from '@ember/component/helper';

export default helper(function equal([param1, param2]/*, hash*/) {
  return param1.valueOf() === param2.valueOf();
});
