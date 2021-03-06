# Migration `20201011153546-school`

This migration has been generated by Colton Travers at 10/11/2020, 11:35:46 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."IDX_62ad461c58393b337dffc03a0a"

ALTER TABLE "public"."grade" DROP CONSTRAINT "FK_93f84e7fcef26f56ce90bd93963"

ALTER TABLE "public"."class" DROP CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae",
DROP COLUMN "id",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id")

ALTER TABLE "public"."grade" DROP CONSTRAINT "PK_58c2176c3ae96bf57daebdbcb5e",
DROP COLUMN "class_id",
ADD COLUMN "classroom_id" integer   ,
DROP COLUMN "id",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id")

ALTER TABLE "public"."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760",
DROP COLUMN "id",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id")

ALTER TABLE "public"."grade" ADD FOREIGN KEY ("classroom_id")REFERENCES "public"."class"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER INDEX "public"."UQ_e12875dfb3b1d92d7d7c5377e22" RENAME TO "user.email_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201011153546-school
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,39 @@
+generator client {
+    provider = "prisma-client-js"
+}
+
+datasource db {
+    provider = "postgresql"
+    url = "***"
+}
+
+/// This model has been renamed to 'Renamedclass' during introspection, because the original name 'class' is reserved.
+model classroom {
+    id      Int     @id @default(autoincrement())
+    name    String
+    teacher String
+    grade   Int
+    time    String
+    grades  grade[]
+
+    @@map("class")
+}
+
+model grade {
+    id           Int        @id @default(autoincrement())
+    name         String
+    grade        Int
+    classroom_id Int?
+    classroom    classroom? @relation(fields: [classroom_id], references: [id])
+}
+
+model user {
+    id         Int      @id @default(autoincrement())
+    givenName  String
+    familyName String
+    email      String   @unique
+    password   String
+    createdAt  DateTime @default(now())
+    updatedAt  DateTime @default(now())
+    apiToken   String
+}
```


