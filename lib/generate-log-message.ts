import { ACTION, AuditLog } from "@prisma/client";

export default function generateLogMessage(log: AuditLog) {
  const { entityType, entityTitle, action } = log;

  switch (action) {
    case ACTION.CREATE:
      return `created ${entityType.toLocaleLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `updated ${entityType.toLocaleLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `deleted ${entityType.toLocaleLowerCase()} "${entityTitle}"`;
    default:
      return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  }
}
