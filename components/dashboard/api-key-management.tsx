"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Eye, EyeOff, Key, Plus, RotateCcw, Trash2 } from "lucide-react";
import { fetcher } from "@/lib/fetcher";
import { useCurrentUser } from "@/hooks/get-current-user";

export function ApiKeyManagement() {
  const [showKeys, setShowKeys] = useState<Record<number, boolean>>({});
  const [newKeyName, setNewKeyName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [apiKeys, setApiKeys] = useState([]);
  const { user } = useCurrentUser();

  const toggleKeyVisibility = (keyId: number) => {
    setShowKeys((prev) => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const maskKey = (key: string) => {
    return key.substring(0, 12) + "..." + key.substring(key.length - 4);
  };

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) return;

    try {
      setIsCreating(true);

      const result = await fetcher("/api/api-key", {
        method: "POST",
        body: {
          keyName: newKeyName,
          userId: user?.id,
        },
      });
      console.log(result);
      setIsCreating(false);
    } catch (error) {
      console.error(error);
      setIsCreating(false);
    }
  };

  const getUserKeys = async () => {
    try {
      const response = await fetcher(`/api/api-key?userId=${user?.id}`);
      if (!response.ok) throw new Error("Failed to fetch user keys");
      const data = await response.json();
      setApiKeys(data.keys);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getUserKeys();
    }
  }, [user?.id]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5" />
          API Key Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertDescription>
            Keep your API keys secure and never share them publicly. Rotate keys
            regularly for better security.
          </AlertDescription>
        </Alert>

        {/* Create New Key */}
        <div className="space-y-4 p-4 border rounded-lg">
          <h3 className="font-semibold">Create New API Key</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="my-2" htmlFor="keyName">
                Key Name
              </Label>
              <Input
                className=""
                id="keyName"
                placeholder="e.g., Production Key, Development Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleCreateKey}
                disabled={!newKeyName.trim() || isCreating}
              >
                <Plus className="w-4 h-4 mr-2" />
                {isCreating ? "Creating..." : "Create Key"}
              </Button>
            </div>
          </div>
        </div>

        {/* Existing Keys */}
        <div className="space-y-4">
          <h3 className="font-semibold">Your API Keys</h3>
          {apiKeys.map((apiKey: any) => (
            <div key={apiKey.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{apiKey.keyName}</h4>
                  <p className="text-sm text-muted-foreground">
                    Created {apiKey?.created} • Last used {apiKey?.lastUsed}
                  </p>
                </div>
                <Badge
                  variant={
                    apiKey?.status === "active" ? "secondary" : "destructive"
                  }
                >
                  {apiKey?.status}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 font-mono text-sm bg-muted p-2 rounded">
                  {showKeys[apiKey.id] ? apiKey.apiKey : maskKey(apiKey.apiKey)}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleKeyVisibility(apiKey.id)}
                >
                  {showKeys[apiKey.id] ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(apiKey.key)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
