import * as  tradeMark from './product/tradeMark';
import * as  authorInfo  from './product/authorInfo';
import * as  attr  from './product/attr';
import * as  spu from './product/spu';
import * as  sku from './product/sku';

// 权限相关的接口文件
import * as user from './acl/user';
import role from './acl/role';
import permission from './acl/permission';

export default{
    tradeMark,
    authorInfo,
    attr,
    spu,
    sku,
    user,
    role,
    permission,
}