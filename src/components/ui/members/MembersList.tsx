import { useMemo, useCallback, useRef, useState } from 'react';
import { useSuspenseQuery } from "@tanstack/react-query";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from '@/components/ui/input';
import Member from './Member';
import { fetchMembers } from "@/lib/api";
import { type Member as MemberType } from '@/lib/types/member';
import styles from  './membersList.module.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function MembersList() {
    const [nameFilter, setNameFilter] = useState('');

const inputRef = useRef<HTMLInputElement>(null);

    const { data } = useSuspenseQuery({
        queryKey: ['members'],
        queryFn: () => fetchMembers(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const filteredMembers = useMemo(() => data.users.filter((member: MemberType)  => 
            member.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
            member.lastName.toLowerCase().includes(nameFilter.toLowerCase())
    ), [data.users, nameFilter]);

    const clearField = useCallback(() => { 
        setNameFilter('');
        inputRef.current?.focus();
}, []);

    return (    
        <>
        <div className="relative w-full">
            <Input name="search-members" value={nameFilter} onChange={event => setNameFilter(event.target.value)} placeholder="Search members" className={styles.searchField} ref={inputRef}/>
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-gray-400"/>
            <XMarkIcon
  onClick={clearField}
  className={`absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-400 cursor-pointer hover:text-gray-600 ${
    nameFilter ? 'visible' : 'invisible'
}`} />
            </div>
            <ul className="mt-3">
                {filteredMembers.length === 0 ? (
                    <li className="text-green-500"> No Members found.</li>
                ) :
                     
                filteredMembers.map(user => (
                    <Member key={user.id} member={user} />
                ))}
            </ul>
        </>
    );
}