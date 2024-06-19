import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const SLUG_WHOLE_DB = 'custom:db';

export const useSlug = () => {
  const { pathname } = useLocation();

  const slug = useMemo(() => {
    const matches = pathname.match(/content-manager\/(collection-types|single-types)\/([a-zA-Z0-9\-:_.]*)/);
    return matches?.[2] ? matches[2] : SLUG_WHOLE_DB;
  }, [pathname]);

  const postID = useMemo(() => {
    const matches = pathname.match(/content-manager\/(collection-types|single-types)\/([a-zA-Z0-9\-:_.]*)\/([0-9]*)/);
    if (matches?.[1] === "collection-types" && matches?.[3]) {
      return matches[3];
    }
    return null;
  }, [pathname]);

  const isSlugWholeDb = useMemo(() => slug === SLUG_WHOLE_DB, [slug]);

  return {
    slug,
    postID,
    isSlugWholeDb,
  };
};
